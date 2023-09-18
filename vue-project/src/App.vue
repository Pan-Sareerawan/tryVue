<template>
   <div>
  <header>
     <h1>Employees Name</h1>
     </header>
     <!--<dataEmployee :employees="employees"/>--> <!-- :employees="employees" v-bild:name = "nameprops" เพื่อเชื่อมไปหน้าลูกซึ่งก็คือ dataEmployee.vue-->
      <dataEmployee />
      
    </div>
</template>

<script>
import dataEmployee from './components/dataEmployee.vue' //เอามาจากหน้าอื่น
import person from './components/person.vue'


export default {
  components: { 
    dataEmployee, //ชื่อ components ที่เอาเข้ามา
    person,
   
    },
  name:"App", //ชื่อที่ไว้ใช้เชื่อกับหน้าอื่น ปกติจะใช้ชื่อเดียวกับไฟลื
 
}
 
  

</script>

<style>
*{
    box-sizing: border-box;
}
body{
    margin: 0;
}
header{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem 0 1rem 0;
  border-radius: 10px;
  padding: 10px;
  background-color: green;
  color: white;
  text-align: center;
  font-weight: bold;
  
}

</style>