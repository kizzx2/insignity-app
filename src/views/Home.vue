<template>
  <div id="home-app">
    <app-sidebar />

    <vue-context ref="menu">
      <h4>Intelligence</h4>

      <li>
        <img src="/icons/bold.svg" style="width: 36px; height: 36px; display: inline" />
        <a href="#">
          <span class="title">Chart</span><br />
          <span class="subtitle">Summarize numbers</span><br />
        </a>
      </li>

      <li>
        <div @contextmenu.prevent.stop="transformUpcase()">
          <span class="title">Upcase</span><br />
          <span class="subtitle">Uppercase some text</span><br />
        </div>
      </li>
    </vue-context>

    <div class="editor-content-container" @contextmenu.prevent="$refs.menu.open">
      <div style="display: flex">
        <div style="flex: 1 0 auto; text-align: left">
          <h2 style="color: gray; font-size: 36px;">start writing...</h2>
        </div>
        <div style="flex: 0 0 auto">
          <toggle-button
            :labels="{checked: 'AI', unchecked: 'OFF'}"
            :value="true"
            :height="44"
            :width="100"
            :font-size="24"
            color="#7300e3"
            v-model="aiEnabled"
          />
        </div>
      </div>

      <br />

      <editor-content class="editor__content" :editor="editor" @contextmenu.prevent="$refs.menu.open" />
    </div>

    <div class="editor-toolbar-container">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
            >
            <img src="/icons/bold.svg" />
          </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
              >
              <img src="/icons/italic.svg" />
            </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
                >
                <img src="/icons/strike.svg" />
              </button>

                <button
                  class="menubar__button"
                  :class="{ 'is-active': isActive.underline() }"
                  @click="commands.underline"
                  >
                  <img src="/icons/underline.svg" />
                </button>

                  <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                    >
                    <img src="/icons/code.svg" />
                  </button>

                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.paragraph() }"
                      @click="commands.paragraph"
                      >
                      <img src="/icons/paragraph.svg" />
                    </button>

                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click="commands.heading({ level: 1 })"
                        >
                        H1
                      </button>

                        <button
                          class="menubar__button"
                          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                          @click="commands.heading({ level: 2 })"
                          >
                          H2
                        </button>

                          <button
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                            @click="commands.heading({ level: 3 })"
                            >
                            H3
                          </button>

                            <button
                              class="menubar__button"
                              :class="{ 'is-active': isActive.bullet_list() }"
                              @click="commands.bullet_list"
                              >
                              <img src="/icons/ul.svg" />
                            </button>

                              <button
                                class="menubar__button"
                                :class="{ 'is-active': isActive.ordered_list() }"
                                @click="commands.ordered_list"
                                >
                                <img src="/icons/ol.svg" />
                              </button>

                                <button
                                  class="menubar__button"
                                  :class="{ 'is-active': isActive.blockquote() }"
                                  @click="commands.blockquote"
                                  >
                                  <img src="/icons/quote.svg" />
                                </button>

                                  <button
                                    class="menubar__button"
                                    :class="{ 'is-active': isActive.code_block() }"
                                    @click="commands.code_block"
                                    >
                                    <img src="/icons/code.svg" />
                                  </button>

                                    <button
                                      class="menubar__button"
                                      @click="commands.horizontal_rule"
                                      >
                                      <img src="/icons/hr.svg" />
                                    </button>

                                      <button
                                        class="menubar__button"
                                        @click="commands.undo"
                                        >
                                        <img src="/icons/undo.svg" />
                                      </button>

                                        <button
                                          class="menubar__button"
                                          @click="commands.redo"
                                          >
                                          <img src="/icons/redo.svg" />
                                        </button>

        </div>
      </editor-menu-bar>
    </div>

    <div class="suggestions">
      <app-user-block />

      <transition name="slide-fade">
        <div v-show="aiEnabled">
          <h4>Performance</h4>

          <div class="progress-container">
            <div class="progress-container-label">
              <span class="label">Reading Level</span>
              <span class="value">58%</span>
            </div>
            <b-progress :value="58" :max="100" class="red"></b-progress>
          </div>

          <div class="progress-container">
            <div class="progress-container-label">
              <span class="label">Industry Standard</span>
              <span class="value">94%</span>
            </div>
            <b-progress :value="94" :max="100" class="blue"></b-progress>
          </div class="progress-container">

          <div class="progress-container">
            <div class="progress-container-label">
              <span class="label">Proprietary Information</span>
              <span class="value">83%</span>
            </div>
            <b-progress :value="83" :max="100" class="yellow"></b-progress>
          </div>

          <br />
          <hr />
          <br />

          <h4>Intelligence <b-spinner v-show="querying" variant="primary" type="grow" /></h4>

          <transition-group name="slide-fade" tag="div">
            <template v-for="(items, category, catIdx) in suggestions">
              <div class="suggestion-category-container" :key="catIdx">
                <h5 class="suggestion-category">{{ category }}</h5>
              </div>

              <template v-for="(item, idx) in items">
                <div class="card" v-if="item.type === 'news'" :key="`${catIdx}-${idx}`" @click="insertSuggestion(item)">
                  <span class="red">•</span>
                  <span>{{ item.value }}</span>
                </div>

                <div class="card" v-else-if="item.type === 'image'" :key="`${catIdx}-${idx}`" @click="insertSuggestion(item)">
                  <img :src="`data:image/png;base64,${item.value}`" />
                </div>

                <div class="card" v-else-if="item.type === 'table'" :key="`${catIdx}-${idx}`" @click="insertSuggestion(item)">
                  <table>
                    <tbody>
                      <tr v-for="tr in item.value">
                        <td v-for="td in tr">{{ td }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="card" v-else-if="item.type === 'chart'" :key="`${catIdx}-${idx}`" @click="insertChart">
                  <vue-apex-charts :options="item.value.options" :series="item.value.series"></vue-apex-charts>
                </div>
              </template>
            </template>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  padding-right: 16px;
  text-align: left;
  margin-top: 1em;
  margin-bottom: 1em;
}

.progress-container-label {
  display: flex;
}

.progress-container-label .label {
  flex: 1 0 auto;
}

.progress-container-label .value {
  flex: 0 0 auto;
}

.progress {
  border-radius: 16px;
  height: 10px;
}

.theme-main {
  color: #7300e3;
}

.text-primary {
  color: #7300e3 !important;
}

.menubar__button {
  margin: 0 0.2em;
  padding: 12px;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 12px;
  background: none;
}

.menubar__button:hover {
  background: lightgray;
}

.menubar__button img {
  width: 24px;
  height: 24px;
}

#home-app {
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr 600px;
  grid-template-rows: 1fr 50px;
  grid-template-areas:
    "sidebar editor-content-container suggestions"
    "sidebar editor-toolbar-container suggestions";
}


h4 {
  text-transform: uppercase;
  font-size: 20px;
}

.suggestions {
  grid-area: suggestions;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
  padding: 2em;
  padding-right: 4em;
  overflow: scroll;
}

.editor-content-container {
  grid-area: editor-content-container;
  padding: 2em;
  overflow-y: scroll;
  margin-bottom: 2em;
}

.editor-toolbar-container {
  grid-area: editor-toolbar-container;
  margin-top: -2em;
}

.editor__content {
  min-height: 100%;
  text-align: left;
  font-size: 24pt;
}

.suggestion-category-container {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

h5.suggestion-category {
  color: #7300e3;
}

.card {
  display: inherit;
  box-shadow: 4px 4px 10px 1px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin: 2em 1em;
  margin-left: 0;
  padding: 2em;
  text-align: left;
  cursor: pointer;
}

.card img {
  width: 100%;
}

.card td, .card th {
  border: 1px solid black;
}

.red {
  color: red;
  margin-right: 0.5em;
}

.v-context {
  text-align: left;
  padding: 1em;
}

.v-context h4 {
  margin-bottom: 1em;
}

.v-context li {
  height: 48px;
  padding: 1em;
  padding-bottom: 4em;
}

.v-context li:hover {
  background: #f6f4f9;
  cursor: pointer;
}

.v-context li img {
  float: left;
  margin-top: 12px;
}

.v-context a {
  float: left;
  padding-top: 0;
}

.v-context a:hover {
  background: none;
}

.settings-container {
  text-align: left;
  padding-left: 2em;
  flex: 1 0 auto;
  align-items: end;
  flex-directions: row;
  display: flex;
}

.settings-container svg:hover {
  background: lightgray;
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<script>
import { Editor, EditorContent, EditorMenuBar, Node } from 'tiptap';
import { setBlockType, textblockTypeInputRule, toggleBlockType } from 'tiptap-commands'
import {
  Blockquote,
  Bold,
  BulletList,
  Code,
  CodeBlock,
  HardBreak,
  Heading,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  HorizontalRule,
  Image,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Strike,
  TodoItem,
  TodoList,
  Underline,
} from 'tiptap-extensions';
import { ToggleButton } from 'vue-js-toggle-button';
import { VueContext } from 'vue-context';
import _ from 'lodash';
import faker from 'faker';
import VueApexCharts from 'vue-apexcharts';
import ApexCharts from 'apexcharts';
import uuid from 'uuid/v4';
import { Base64 } from 'js-base64';
import AppSidebar from '@/components/AppSidebar';
import AppUserBlock from '@/components/AppUserBlock';
import axios from 'axios';

class Highlight extends Node {
  get name() {
    return 'highlight'
  }

  get defaultOptions() {
    return { ent: 'name' };
  }

  get schema() {
    return {
      attrs: {
        ent: {
          default: 'name',
        },
      },
      content: 'inline*',
      group: 'block',
      defining: true,
      parseDOM: [
        { tag: 'entity-name', attrs: { ent: 'name' } },
        { tag: 'entity-company', attrs: { ent: 'name' } },
        { tag: 'entity-date', attrs: { ent: 'name' } },
      ],
      toDOM: node => {
        return [`span`, { class: `entity-${node.attrs.ent}` }, 0];
      }
    };
  }
};

const API_URL = 'http://245b4c4d.ngrok.io/text';

export default {
  name: 'home',

  components: {
    EditorContent, EditorMenuBar, ToggleButton, VueContext, VueApexCharts,
    AppSidebar, AppUserBlock
  },

  mounted() {
    setTimeout(this.onUpdateContent, 100);
  },

  data() {
    return {
      aiEnabled: true,
      querying: false,
      suggestions: [],
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new Bold(),
          new BulletList(),
          new Code(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Highlight(),
          new History(),
          new Table(),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new HorizontalRule(),
          new Image(),
          new Italic(),
          new Link(),
          new ListItem(),
          new OrderedList(),
          new Strike(),
          new TodoItem(),
          new TodoList(),
          new Underline(),
        ],
        autoFocus: true,
        content: ` `,
        onUpdate: _.debounce(this.onUpdateContent, 1000),
      }),
    };
  },

  methods: {
    transformUpcase() {
      const sel = document.getSelection();
      const text = sel.anchorNode.textContent;

      const rv = text.slice(0, sel.anchorOffset) +
        text.slice(sel.anchorOffset, sel.focusOffset).toUpperCase() +
        text.slice(sel.focusOffset);

      sel.anchorNode.textContent = rv;
    },

    insertSuggestion(item) {
      switch (item.type) {
        case 'news':
          this.editor.setContent(this.editor.getHTML() + `<p>${item.value}</p>`);
          break;

        case 'image':
          this.editor.setContent(this.editor.getHTML() + `<p><img src="data:image/png;base64,${item.value}" /></p>`);
          break;

        case 'table':
          this.editor.setContent(this.editor.getHTML() + `<table><tbody>` +
            item.value.map((tr) => `<tr>` + tr.map((td) => `<td>${td}</td>`).join('') + `</tr>`).join("")
          );
          break;
      }
      this.editor.focus();
    },

    insertChart(event) {
      const svg = event.target.tagName === 'svg' ? event.target : event.target.querySelector('svg');
      this.editor.setContent(this.editor.getHTML() + `<p><img src="data:image/svg+xml;base64,${Base64.encode(svg.outerHTML)}" /></p>`);
    },

    async onUpdateContent() {
      if (this.querying) {
        return;
      }

      const query = document.querySelector('.ProseMirror').innerText;
      const rv = await this.query(query);
      this.suggestions = [];
      setTimeout(() => this.suggestions = rv.suggestions, 100);
    },

    async query(query) {
      if (query.trim() === '') {
        return;
      }

      this.querying = true;
      // this.$Progress.start();

      try {
        const params = new URLSearchParams();
        params.append('text', query);

        const rv = await axios.post(API_URL, params);

        /*const rv = {
          "entites": [
              [
                  "northern",
                  "ireland",
                  "health",
                  "services"
              ]
          ],
          "message": "success",
          "status code": 200,
          "suggestions": {
              "GoogleNews": [
                  {
                      "type": "news",
                      "value": "Northern Ireland's highly restrictive abortion ban lifted at midnight on Monday after legislation was brought in by MPs at Westminster. Same-sex marriage was also legalised under the change to the law. The historic law change marks the beginning of a new chap…"
                  },
                  {
                      "type": "news",
                      "value": "Britain's government set out its agenda in a Queen's Speech on Monday, reaffirming its commitment to leaving the European Union on Oct. 31 and boosting spending on police, education and health before a widely expected election."
                  },
                  {
                      "type": "news",
                      "value": "A Northern Ireland woman acquitted of buying abortion pills for her daughter following a landmark law change has expressed relief she can now “finally move on with her life”. A judge directed a jury at Belfast Crown Court to find the 39-year-old mother not gu…"
                  },
                  {
                      "type": "news",
                      "value": "Although the Good Friday Agreement brought an end to the violence in the North, the issues of national identity, civil and political rights, and religious differences that lay behind the Troubles are far from resolved. But without Brexit, it’s quite probable …"
                  },
                  {
                      "type": "news",
                      "value": "A Westminster committee warns services are \"lacking adequate financial support or strategic guidance\"."
                  },
                  {
                      "type": "news",
                      "value": "Until recently, it was possible to believe that there was a middle way, or to be in denial that a decisive moment would come. That’s no longer the case, Sam Knight writes."
                  },
                  {
                      "type": "news",
                      "value": "Campaigners who fought for decades to end Northern Ireland's same-sex marriage ban and restrictions on abortion gathered in Belfast on Monday to prepared for a momentous change to the laws on both at the stroke of midnight."
                  },
                  {
                      "type": "news",
                      "value": "Claims several groups of children arrived in Belfast in shipping containers are currently being investigated by police."
                  },
                  {
                      "type": "news",
                      "value": "More than 19,300 people across Northern Ireland are waiting for a first outpatient appointment."
                  },
                  {
                      "type": "news",
                      "value": "From midnight, women and girls can terminate a pregnancy without fear of prosecution."
                  }
              ],
              "HKEX": null,
              "LawSuits": null,
              "StockData": null,
              "Twitter": null
          }
        };*/

        if (rv.data['message'] !== 'success') {
          throw rv.data['message'];
        }

        // this.$Progress.finish();
        this.querying = false;

        const rv0 = {
          entities: [
            ['HSBC', 'company'],
            ['Mark Zuckberg', 'company'],
            ['HSBC', 'company'],
          ],
          suggestions: {
            'macroeconomics about China': [
              { value: [['One', 'Two', 'Three'], ['Three', 'Four', 'Five']], type: 'table' },
              { value: {
                options: {
                  chart: {
                    toolbar: {
                    show: false
                    },
                  },

                  xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                  }
                },
                series: [{
                  name: 'series-1',
                  data: [30, 40, 45, 50, 49, 60, 70, 91]
                }]
              }, type: 'chart' }
            ],
          },
        };

        const rv1 = { suggestions: {}, entities: rv.data['entities'] };
        rv1.suggestions['GoogleNews'] = rv.data['suggestions']['GoogleNews'];
        for (const k in rv0.suggestions) {
          rv1.suggestions[k] = rv0.suggestions[k];
        }

        return rv1;
      } catch (e) {
        // this.$Progress.fail();
        this.querying = false;
        throw e;
      }
    },
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
