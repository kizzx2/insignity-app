<template>
  <div id="home-app">
    <div class="sidebar">
      <h1 class="theme-main">insignity</h1>

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
    </div>

    <div class="editor-content-container">
      <editor-content class="editor__content" :editor="editor" />
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

      <h4>Performance</h4>

      <div class="progress-container">
        Reading Level
        <b-progress :value="58" :max="100"></b-progress>
      </div>

      <div class="progress-container">
        Industry Standard
        <b-progress :value="94" :max="100"></b-progress>
      </div class="progress-container">

      <div class="progress-container">
        Proprietary Information
        <b-progress :value="83" :max="100"></b-progress>
      </div>

      <br />
      <hr />
      <br />

      <h4>Intelligence</h4>

      <div class="card">
        <span class="red">•</span>Lorem ipsum dolor sit amet
      </div>

      <div class="card">
        <span class="red">•</span>Lorem ipsum dolor sit amet
      </div>

      <div class="card">
        <span class="red">•</span>Lorem ipsum dolor sit amet
      </div>
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

.progress-bar {
  border-radius:  16px !important;
}

.theme-main {
  color: #5655bd;
}

.menubar__button {
  margin: 0 0.2em;
  padding: 12px;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 12px;
  background: #f6f4f9;
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
}

.sidebar h4 {
  text-align: left;
  margin-top: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
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

.sidebar ul li.active {
  color: #5655bd;
  padding-left: 1.45em;
  border-left: 8px solid #5655bd;
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
}

.red {
  color: red;
  margin-right: 0.5em;
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

export default {
  name: 'home',

  components: {
    EditorContent, EditorMenuBar
  },

  data() {
    return {
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
        content: `
          <h1>Lorem ipsum dolor sit amet</h1>
        `
      })
    };
  },

  beforeDestroy() {
    this.editor.destroy();
  }
}
</script>
