<template>
  <div>
    <div ref="element">
      This should be replaced when the component gets mounted
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ref',

  mounted () {
    try {
      const element = this.$refs.element;
      element.innerHTML = 'This is the Ref component';
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error in Ref component:', err);
    }
  },
};
</script>
