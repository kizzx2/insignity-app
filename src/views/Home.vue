<template>
  <div id="home-app">
    <div class="sidebar">
      <h1 class="theme-main" style="text-align: center"><img src="/logo.png" style="width: 200px; margin-left: 1em; margin-top: 1em" /></h1>

      <h4>Team</h4>

      <ul>
        <li class="active">Finance</li>
        <li>Accounting</li>
        <li>Insurance</li>
        <li>Loan</li>
      </ul>

      <h4>Folders</h4>

      <ul>
        <li>Annual Reports</li>
        <li class="active">Financial Statements</li>
        <li>News Articles</li>
        <li>Bank Statements</li>
        <li>Land Registry</li>
        <li>Company Records</li>
        <li>Public Databases</li>
      </ul>

      <div class="settings-container">
        <v-icon name="settings" style="width: 24px; cursor: pointer"></v-icon>
      </div>
    </div>

    <vue-context ref="menu">
      <h4>Intelligence</h4>

      <li>
        <img src="/icons/bold.svg" style="width: 36px; height: 36px; display: inline" />
        <a href="#">
          <span class="title">Chart</span><br />
          <span class="subtitle">Embed a chart from data source</span><br />
        </a>
      </li>

      <li>
        <img src="/icons/bold.svg" style="width: 36px; height: 36px; display: inline" />
        <a href="#">
          <span class="title">Table</span><br />
          <span class="subtitle">Add a dynamic table</span><br />
        </a>
      </li>

      <li>
        <img src="/icons/bold.svg" style="width: 36px; height: 36px; display: inline" />
        <a href="#">
          <span class="title">Validate</span><br />
          <span class="subtitle">Validate your information</span><br />
        </a>
      </li>

      <li>
        <img src="/icons/bold.svg" style="width: 36px; height: 36px; display: inline" />
        <a href="#">
          <span class="title">Summarize</span><br />
          <span class="subtitle">Summarize the selected content</span><br />
        </a>
      </li>
    </vue-context>

    <div class="editor-content-container" @contextmenu.prevent="$refs.menu.open">
      <div style="text-align: right">
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
      <div class="avatar-container">
        <h5>Joslin Rodgers</h5>
        <img class="avatar" src="/cecilia.jpg" />
      </div>

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

          <h4>Intelligence</h4>

          <div class="card" @click="addSomeText()">
            <span class="red">•</span>Lorem ipsum dolor sit amet
          </div>

          <div class="card" @click="addSomeText()">
            <span class="red">•</span>Lorem ipsum dolor sit amet
          </div>

          <div class="card" @click="addSomeText()">
            <span class="red">•</span>Lorem ipsum dolor sit amet
          </div>
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
  grid-template-columns: 300px 1fr 400px;
  grid-template-rows: 1fr 50px;
  grid-template-areas:
    "sidebar editor-content-container suggestions"
    "sidebar editor-toolbar-container suggestions";
}

.sidebar {
  grid-area: sidebar;
  background: #f6f4f9;
  padding: 2em;
  padding-left: 0;
  display: flex;
  flex-direction: column;
}

h4 {
  text-transform: uppercase;
  font-size: 20px;
}

.sidebar h4 {
  text-align: left;
  margin-top: 2em;
  margin-bottom: 1em;
  margin-left: 1.3em;
  text-transform: uppercase;
}

.sidebar ul {
  text-align: left;
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

.sidebar ul li {
  padding-left: 2em;
  height: 2em;
}

.sidebar ul li:hover {
  font-weight: bold;
  cursor: pointer;
  color: #7300e3;
}

.sidebar ul li.active {
  color: #7300e3;
  font-weight: bold;
  padding-left: 1.55em;
  border-left: 6px solid #7300e3;
}

.suggestions {
  grid-area: suggestions;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
  padding: 2em;
  padding-right: 4em;
}

.editor-content-container {
  grid-area: editor-content-container;
  padding: 2em;
}

.editor-toolbar-container {
  grid-area: editor-toolbar-container;
  margin-top: -2em;
}

.avatar-container {
  margin-bottom: 2em;
  text-align: right;
}

.avatar-container h5 {
  margin-right: 1em;
  display: inline;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 48px;
}

.editor__content {
  min-height: 100%;
  text-align: left;
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
</style>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
import { ToggleButton } from 'vue-js-toggle-button';
import { VueContext } from 'vue-context';

export default {
  name: 'home',

  components: {
    EditorContent, EditorMenuBar, ToggleButton, VueContext
  },

  data() {
    return {
      aiEnabled: true,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        autoFocus: true,
        content: `
          <h1>start writing...</h1>
        `
      })
    };
  },

  methods: {
    addSomeText() {
      this.editor.setContent(this.editor.getHTML() + "<h3>FOOO</h3>");
      this.editor.focus();
    }
  },

  beforeDestroy() {
    this.editor.destroy();
  }
}
</script>
