<template>
  <div>
    <simple />
    <ref />
    Before Icon<svg-icon />After Icon
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import Simple from './Simple.vue';
import Ref from './Ref.vue';

export default {
  name: 'App',

  components: {
    'svg-icon': SvgIcon,
    'simple': Simple,
    'ref': Ref,
  },
};
</script>
