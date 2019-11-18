<template>

  <div id="ninjas">
      <ul>
          <li @click="ninja.show = !ninja.show" v-bind:key="(ninja+i)" v-for="(ninja,i) in ninjas">
              <h2> {{ ninja.name }} </h2>
              <h3 v-show="ninja.show" > {{ ninja.rank }} </h3>
          </li>
      </ul>

      <button @click="deleteNinja">Delete Ninja</button>

      <button @click="update" >Add Count</button>
  </div>


</template>

<script>

export default {
 props:  
 {
     ninjas:
     {
         type:Array,
         required:true
     },
     count:
     {
         type:Number
     }  
 },   
 data()
 {
   return {    
    
   }
 },
 methods:
 {
     deleteNinja()
     {
        this.ninjas.pop();
     },
     update()
     {
        //do not mutate state directly
        let newCount = this.count+1;
        this.$emit('update',newCount);
     }
 },
 //lifecycle hooks
 beforeCreate()
 {
    alert('Before Create')  ;
 },
 created()
 {
    alert('Created')  ;
 },
 beforeMount()
 {
    alert('Before Mounted')  ;
 },
 mounted()
 {
    alert('Mounted')  ;
 },
 beforeUpdate()
 {
    alert('Before Updated')  ;
 },
 updated()
 {
    alert('Updated')  ;
 }   
}
</script>

<style scoped>

#ninjas
{
    padding: 0 20px;
    margin: 40px auto;
}

ul
{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
}

li
{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 20px;
    border: 1px solid #fcb22a;
    cursor: pointer;
    margin:10px;

}

button
{
    display: block;
    width:112px;
    color:#fff;
    margin:20px auto;
    border: none;
    padding: 10px 12px;
    font-size: 16px;
    background: sandybrown;
    border-radius: 4px;
    cursor:pointer;
    outline: none;
}



</style>
