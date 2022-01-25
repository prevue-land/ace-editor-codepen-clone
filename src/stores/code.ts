import { defineStore } from 'pinia';

type State = {
  html: string;
  css: string;
  javascript: string;
};

type Getters = {
  resultingDocument(): string;
  isEmptyDocument(): boolean;
};

export type Actions = {
  setHtml(html: string): void;
  setCss(css: string): void;
  setJavascript(javascript: string): void;
};

export const useCodeStore = defineStore<'code', State, Getters, Actions>(
  'code',
  {
    state() {
      return {
        html: '',
        css: '',
        javascript: ''
      };
    },
    getters: {
      resultingDocument() {
        return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>${this.css}</style>
          </head>
          <body>
            ${this.html}
            <script>${this.javascript}</script>
          </body>
        </html>        
        `;
      },
      isEmptyDocument() {
        const totalTextLength =
          this.html.trim().length +
          this.css.trim().length +
          this.javascript.trim().length;

        return totalTextLength === 0;
      }
    },
    actions: {
      setHtml(html: string) {
        this.html = html;
      },
      setCss(css: string) {
        this.css = css;
      },
      setJavascript(javascript: string) {
        this.javascript = javascript;
      }
    }
  }
);
