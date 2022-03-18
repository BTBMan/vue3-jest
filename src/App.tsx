import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class='root'>
        <h1>root</h1>
      </div>
    );
  },
});
