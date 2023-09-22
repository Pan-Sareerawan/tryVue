<template>
  <li>
    <h2>Name: {{ Name }} Lastname: {{ Lastname }}</h2>

    <button @click="showDescription(id)">รายละเอียด</button>&nbsp;
    <!--ส่ง id ไปโดยใช้event @click="เรียกเมททอด"-->
    <button @click="deketeEmployee(id)">ลบข้อมูล</button>
    <!-- <button @click="increase(10)">เพิ่ม</button>
      <button @click="decrease(20)">ลด</button>-->
    <transition name="fade">
      <div v-show="isVisible">
        <!--v-show ใช้ ซ่อนหรือแสดง-->
        <p>Salary: {{ Salary }}</p>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: "person",
  // props:["Name","Lastname","Salary"]//แบบปกติที่ไม่มีการตรวจสอบprops
  props: {
    //แบบที่มีการตรวจสอบprops
    id: {
      type: Number,
    },
    Name: {
      type: String, //ใส่แค่ตัวหนังสือ
      required: true, //บังคับต้องใส่
    },
    Lastname: {
      type: String,
      required: true,
    },
    Salary: {
      type: Number,
    },
    isVisible: {
      type: Boolean,
    },
  },
  methods: {
    showDescription(id) {
      // console.log(id);
      //ประกาศให้แม่ทราบว่าจะส่งข้อมูลไป this.$emit("ตั้งชื่ออีเว้น",ช้อมูลที่ส่งไป)
      this.$emit("show", id);
    },
    deketeEmployee(id) {
      //console.log(id);
      this.$emit("delete", id);
    },
    /* increase(value){
        // this.Salary+=value
        this.$emit("increase",id);
    },
    decrease(value){
         //this.Salary-=value
         this.$emit("decrease",id);
    }*/
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  font-weight: bold;
}
h2 {
  color: brown;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem 0 1rem 0;
  border-radius: 10px;
  padding: 10px;
  background-color: rgb(24, 33, 6);
  color: white;
  text-align: center;
}
button {
  background-color: aqua;
  border: 0px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.fade-enter-form{
  opacity: 0; 
}
.fade-enter-active{
  transition: all 0.5s linear;
}
</style>