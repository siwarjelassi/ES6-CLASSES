class Human{
    name; 
    job;
    skills; 
constructor(){
this.name= ""
this.job=""
this.skills=[]

}   

}

    
  class Student extends Human{
    constructor(){
      super();
    }
    
    getJob(job){
      this.job=job; 
      console.log(this.job)
      
  }
  leaveJob(){
   this.job="unempolyed"
   console.log(this.job)

  }
  learnNewSkill(skill){
    this.skills.push(skill);
    console.log(this.skills)

  } 
  forgetSkill(skill){
    this.skills=this.skills.filter((S)=>{return S!=skill})
    console.log(this.skills)

  }; 
  }
  const me = new Student();

    me.getJob("Web developer");
  
    me.learnNewSkill("React");
      me.learnNewSkill("java");
 me.learnNewSkill("angular");
    
      me.forgetSkill("React");
    
     me.leaveJob();
