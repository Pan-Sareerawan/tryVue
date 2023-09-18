<template>
 <div>
 
  <ul>
    <!-- loop (item= ตัวแทนของสมาชิกแต่ละตัวในArray,index=NumberIndexInArreay) in=ดึงาจาก propsnameซึงก็คือemployees-->
    <person
      v-for="(item,index) in employees" 
      :key="index"
      :Name="item.Name"
      :Lastname="item.Lastname"
      :Salary="item.Salary"
      :id="item.id"
      :isVisible="item.isVisible"
    @show="togglevisivle"
     @delete="removeEmployee"
      
    /><!--@increase="increaseSalary"
       @decrease="decreaseSalary"-->

  </ul>
 </div>
</template>

<script>
import person from './person.vue' //เอามาจากหน้าอื่น
export default {
 
    name: 'dataEmployee',
    components: { 
      person 
      },
   
      data() {
    return {
      
            employees:[ // Array
                {id:1,Name:"Sareerawan" ,Lastname:"Tabcharoenthun",Salary:20000,isVisible:false},
                {id:2,Name:"Phukjita" ,Lastname:"D-Jaa",Salary:50000,isVisible:false},
                {id:3,Name:"Steven" ,Lastname:"Halon",Salary:35000,isVisible:false},
                {id:4,Name:"Kevin" ,Lastname:"Flowee",Salary:15000,isVisible:false},
                {id:5,Name:"Kevinee" ,Lastname:"Flowee",Salary:15000,isVisible:false}
            ]

    }
  },
    methods: {
      togglevisivle(id){//togglevisivle(จั้งชื่อไอดีลูกเพื่อรับมา) เมททอดนี้ทำงานก็ต่อเมื่อมีอีเว้น @show ที่รับมจาก ที่ลูกส่งสัญญานมาให้แม่
        //console.log("child ID = " , id)
       this.employees = this.employees.map((item)=>{
          if(item.id === id){
            return {...item,isVisible:!item.isVisible}
          }return item
        })
      },
      removeEmployee(id){
        this.employees =  this.employees.filter(item=>{
         return item.id !== id
        })
      },
     /* increaseSalary(){
        return Salary
      },
      decreaseSalary(){
         return Salary

      }*/
    },

}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
body{
    margin: 0;
}
ul{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 10px;
  background-color: yellowgreen;
  color: white;
  text-align: center;
  font-weight: bold;
  
}
</style>