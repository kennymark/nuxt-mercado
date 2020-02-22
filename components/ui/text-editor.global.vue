<template>
  <div class="editor border p-3 mt-5 rounded">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.bold() }"
          @click="commands.bold"
        >
          <h2>B</h2>
        </button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn  bg-gray-300': isActive.italic() }"
          @click="commands.italic"
        >
          <h2 class="italic">I</h2>
        </button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.strike() }"
          @click="commands.strike"
        >––</button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.underline() }"
          @click="commands.underline"
        >
          <h2>U</h2>
        </button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn  bg-gray-300': isActive.code_block() }"
          @click="commands.code_block"
        >
          <h2>
            &lt;
            &gt;
          </h2>
        </button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.paragraph() }"
          @click="commands.paragraph"
        >P</button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >H1</button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >H2</button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn bg-gray-300': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >H3</button>

        <button
          class="px-2 py-1 w-10 focus:outline-none"
          :class="{ 'btn  bg-gray-300': isActive.blockquote() }"
          @click="commands.blockquote"
        >&quot;</button>

        <button class="px-2 py-1 w-10 focus:outline-none" @click="commands.horizontal_rule">HR</button>

        <button class="px-2 py-1 w-10 focus:outline-none" @click="commands.undo">
          <i class="el-icon-refresh-left" />
        </button>

        <button class="px-2 py-1 w-10 focus:outline-none" @click="commands.redo">
          <i class="el-icon-refresh-right" />
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content mt-4 text-gray-600 text-base" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
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
  History
} from "tiptap-extensions";

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  props: ["description"],
  watch: {
    editor(val) {
      consoe.log(val);
    }
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
          new History()
        ],
        content: this.description
      })
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style >
.ProseMirror-focused {
  outline: none;
}
</style>