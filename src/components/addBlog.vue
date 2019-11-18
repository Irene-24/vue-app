<template>
  <div id="add-blog"> 

      <h2 class="callToAction">Add A New Blog Post</h2>

      <form v-if="!submitted">

        <label for="blog-title">
          Blog Title : 
          <br />
          <input type="text" placeholder="The Web: A study in evolution" name="blog-title" id="blog-title"  v-model.lazy="blog.title" required autofocus />
        </label>

                  <div id="authors">
            <label for="authors">
                <select v-model="blog.author">
                    <option selected value="">Please select an author</option>
                    <option v-for="author in authors" :key="author" :value="author"> {{author}} </option>
                </select>
            </label>
        </div>


        <label>
          Blog Content :           
          <br />
          <textarea rows="5"  v-model.lazy="blog.content" placeholder="In the begining, there was only markup..."></textarea>
        </label>
        <div id="checkboxes">

            <label for="ninjas">Ninjas <br>
            <input type="checkbox" value="ninjas" v-model="blog.categories">
            </label>

            <label for="wizards">Wizards <br>
            <input type="checkbox" value="wizards" v-model="blog.categories"></label>

            <label for="samurai">Samurai <br>
            <input type="checkbox" value="samurais" v-model="blog.categories"></label>

            <label for="soldiers">Soldiers <br>
            <input type="checkbox" value="soldiers" v-model="blog.categories"></label>

        </div>

        <button @click.prevent="submitForm">Post Atricle</button>

        
      </form>

      <div v-if="submitted">
          <h3>
              {{message}}
          </h3>
    </div>

      <div v-if="err">
          <h3>
              {{message}}
          </h3>
    </div>

     <hr>


      <div id="preview">

        <h3 >Blog Preview</h3>

        <h2 class="title" > {{blog.title}} </h2>

        
        <p class="author" v-show="blog.author.length > 0"> Author : {{blog.author}}</p>

        <p class="content"> {{blog.content}} </p>



        <p v-show="blog.categories.length > 0">Categories</p>
        <ul>
            <li :key="cat" v-for="cat in blog.categories">{{cat}}</li>
        </ul>


        


      </div>
  
  
  </div>
</template>

<script>

export default 
{
  data() 
  {
    return {
        blog:
             { 
                title : "The Web: A study in evolution",
                content : "In the begining, there was only markup...",
                author:"",
                categories:[]
           },

        authors:["s. king","j. archer","g. martin","j. tolkien"] ,
        submitted:false ,
        err:false,
        message:"Article successfully posted." 
    };
  },

  methods: 
  {
      submitForm()
      {
        this.$http.post('https:/jsonplaceholder.typicode.com/posts',
        {
          title: this.blog.title,
          body: this.blog.content,
          userId: this.blog.author,
          categories:this.blog.categories,
        })
        .then( data =>
        {
            console.log(data);
            this.submitted = true;
            this.err = false;
            this.message = "Article successfully posted.";
        })
        .catch( err => 
        {
            console.log(err);
            this.submitted = false;
            this.err = true;
            this.message = "Error submmiting article";
        });
      }
   
  },

};
</script>
 

<style scoped>


 .callToAction
 {
     text-align:center;
     margin: 10px;
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
   width:100%;
   margin:12px auto;
   padding: 5px 8px;;
   border-radius: 3px;
   border: 1px solid sandybrown;
   outline:none;
 }

 input
 {
   box-shadow: none;
  
 }

 textarea
 {
     resize: vertical;
     min-height: 70px;
 }

  select
 {
     width:100%;
     border: 1px solid sandybrown;
     padding:5px;
     text-transform: capitalize;
     outline: none;
     
 }

 button
 {
    background: sandybrown;
    color:white;
    min-width: 112px;
    padding: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;

 }

 #preview
 {
    border: 1px dashed #ccc;
    width: 70vw;
    max-width: 600px;
    min-width: 290px;
    margin: 20px auto;
    padding:10px;
 }

 #preview ul
 {
     margin-left: 40px;     
 }

 #preview li
 {
    text-transform:capitalize
 }

 .title,.author,option
 {
    text-transform: capitalize;
 }

 .content
 {
    white-space: pre-wrap;
 }

 #checkboxes label
 {
    display: inline-block;
    margin-right:12px;
 }



</style>
