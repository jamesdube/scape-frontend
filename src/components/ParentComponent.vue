<template>
  <div>
    <child-component>
      <template slot-scope="defaultSlotScope">
        <p>{{defaultSlotScope.text}}</p>
        <!-- Renders <p>I'll get rendered inside the default slot.</p> -->
      </template>
      <template slot="literally-the-best" slot-scope="bestSlotScope">
        <p>{{bestSlotScope.text}}</p>
        <!-- Renders <p>I'll get rendered inside the *best* slot.</p> -->
      </template>
      <template slot="bazinga" slot-scope="myRetrievedData">
        <p>{{myRetrievedData.text}}</p>
      </template>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  mounted(){
    console.log("mounted")
    console.log(this.$scopedSlots.default({}))
  }
}
</script>