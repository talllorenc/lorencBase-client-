import Code from "@editorjs/code";
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image';

export const EDITOR_TOOLS = {
  code: Code,
  header: Header,
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "http://localhost:8080/api/notes/upload",
      },
    },
  },
};
