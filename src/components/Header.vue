<template>

<header>
    <h1 @click="changeTitle" > {{ title }} </h1>
</header>

</template>

<script>

export default {
 props:
 {
   title:{type:String}
 },
 data()
 {
   return {
    
   }
 },
 methods:
 {
   changeTitle()
   {
     this.$emit('changeTitle',"Vue Samurais");
   }
 },
 components : 
 {
  
 }
}
</script>

<style scoped>

 header
 {
     padding: 10px;
     background:sandybrown;
     cursor: pointer;
 }
 
 h1
 {
     color:#271302;
     text-align: center;
 }

</style>
