<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="svg" />
  </div>
</template>

<script>
import iconBugReport from 'material-design-icons/action/svg/production/ic_bug_report_24px.svg';

export default {
  name: 'SvgIcon',

  data () {
    return {
      svg: iconBugReport,
    };
  },
};
</script>
