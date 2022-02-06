<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes';
import EditorPaneContent from './components/EditorPaneContent.vue';
import ResultsPaneContent from './components/ResultsPaneContent.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <Splitpanes id="main-splitpanes" horizontal>
    <Pane>
      <Splitpanes id="editor-splitpanes">
        <Pane>
          <EditorPaneContent lang="html" />
        </Pane>
        <Pane>
          <EditorPaneContent lang="css" />
        </Pane>
        <Pane>
          <EditorPaneContent lang="javascript" />
        </Pane>
      </Splitpanes>
    </Pane>
    <Pane id="results-pane">
      <ResultsPaneContent />
    </Pane>
  </Splitpanes>
  <PageFooter />
</template>

<style>
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

#app,
.splitpanes__pane {
  display: flex;
  flex-direction: column;
}

#main-splitpanes > .splitpanes__splitter,
#editor-splitpanes > .splitpanes__splitter {
  background-color: #35495e;
}

#main-splitpanes > .splitpanes__splitter {
  min-height: 3px;
}

#editor-splitpanes > .splitpanes__splitter {
  min-width: 3px;
}

#results-pane {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
