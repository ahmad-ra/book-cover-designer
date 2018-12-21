<template>
  <div id="app">

      <div class="container">
 <div class="row  " >
            
                <div class="col-lg-5 " >
                    
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default" style="    font-family: cursive;">TITLE</span> </div>
                    <input v-model="title" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                    
                 <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default" style="    font-family: cursive;">SUb Title</span> </div>
                    <input  v-model="subtitle" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                    

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default" style="    font-family: cursive;">Author Name</span> </div>
                    <input v-model="author" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>      
                    
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default" style="    font-family: cursive;">Background Color</span> </div>
                    <input v-model="background" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>  

                 <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default" style="    font-family: cursive;">Publisher</span> </div>
                    <input v-model="publisher" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div> 
                    

                    
                    
                    
             <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Year</label>
              </div>
              <select v-model="year" class="custom-select years" id="years">
                  
                <option v-for="year in years" :value="year">{{year}}</option>
                      
                    
                
              </select>
            </div>
                    

                    
                    
                    
                    <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default" style="    font-family: cursive;">Font Size</span> </div>
                    <input v-model="font" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div> 
                
  
                    
                    
                    
     </div>
                <div class="col-lg-7 " :style= " { 'background-color' : background , 'border-radius': border+'px' }"
                      >
                
                    <div  class="container">
                    

                        
                    
                        
                        
                        
                        
                        <div>
    <v-stage ref="stage" :config="stageSize">
      <v-layer>
          
          
          
          <v-text  :config="{text: this.title, fontSize: this.font , draggable:true}"/>

          <v-text  :config="{text: this.subtitle, fontSize: this.font , draggable:true}"/>
          <v-text   :config="{text: this.author, fontSize: this.font , draggable:true}"/>
          <v-text   :config="{text: this.publisher, fontSize: this.font , draggable:true}"/>
          <v-text   :config="{text: this.year, fontSize: this.font , draggable:true}"/>
      </v-layer>
      <v-layer ref="dragLayer"></v-layer>
    </v-stage>
  </div>
                        
                        
                        
                        
                        
                        
                        
                    </div>
                    
                </div>
            
            
          
         
                
        </div>
        </div>
      
      
            
      <div class="card">
  <div class="card-body" >
      
      <p :style="{'font-size' : font+ 'px'}">
   PLAY AND DESIGN YOUR BOOK COVER , YOU CAN DRAG AND DROP THE TEST WHEREVER YOU LIKE! ,
      AND YOU CAN ALSO CHANGE THE FONT SIZE DYNAMICALLY!. TRY CHANGING THE SIZE NOW  
          </p>
  </div>
      
      
  </div>
      
    </div>
</template>

<script>

const width = window.innerWidth;
const height = window.innerHeight;
    
    
export default {
  name: 'app',
  data () {
    return {
         stageSize: {
        width: width,
        height: height
      },
  title: ' ' ,
      
      subtitle : ' ',
      author : ' ',
      background : ' ' ,
      publisher : ' ',
      year : ' ' ,
        border : 50 ,
        years : [] ,
        font : 20 ,
     
    }
  } ,

created: function () {
    
  
                            for (var i =0 ; i< 60 ; i++)
                            {
                            
 
                                this.years.push( 2018-i );  
    
}
    

}
}
    
 

</script>

<style>
    
</style>
