<template>
  <div>
    <h1 class="callToAction">Please fill the form below</h1>

    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>

      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>

      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>

      <div id="useful-links">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>

 .callToAction
 {
   text-align: center;
   margin: 10px ;
 }
 
 form
 {
   max-width:500px;
   min-width:280px;
   width:60vw;
   margin:20px auto;
   border: 1px solid sandybrown;
   border-radius: 4px;
   text-align: center;
   padding: 10px 12px;
   box-shadow:0px -3px 3px 1px sienna;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 }

 label
 {
   margin: 10px auto;
   display: block;
 }

 input,textarea
 {
   display:block;
   width:80%;
   margin:auto;
   padding: 5px 8px;;
   border-radius: 3px;
   border: 1px solid sandybrown;
   outline:none;
 }

 input
 {
   box-shadow: none;
  
 }


 #useful-links li
 {
   list-style-type: none;
   display: inline-block;
   margin:  10px;
 }

 #useful-links a
 {
    color:sandybrown;
    text-decoration:none;
    display: block;
    font-weight: 700;
 }


</style>
