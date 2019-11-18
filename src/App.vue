<template>
  <div class="app-wrap"> 
    <show-posts></show-posts>  
  
  </div>
</template>

<script>

//import addBlog from "./components/addBlog.vue";
import showPosts from "./components/showPosts.vue";

export default 
{
  data() 
  {
    return {

    };
  },
  components: 
  {
    //'add-blog':addBlog,
    'show-posts':showPosts

  },
  methods: 
  {
   
  },

};
</script>
 

<style >
  * 
  {
    box-sizing: border-box;
    padding: 0;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

.app-wrap 
{
      margin: 0;
   
}
</style>
