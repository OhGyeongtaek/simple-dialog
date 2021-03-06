# Simple Dialog

<center>

[![Typescript](https://img.shields.io/badge/Typescript-blue.svg)](https://www.typescriptlang.org/)
[![Vue v2.6.11](https://img.shields.io/badge/Vue-v2.6.11-blue.svg)](https://kr.vuejs.org/v2/guide/index.html)
[![Vuetify v2.4.0](https://img.shields.io/badge/Vuetify-v2.4.0-blue.svg)](https://vuetifyjs.com/en/)
[![Jest v24.0.19](https://img.shields.io/badge/Jest-v24.0.19-blue.svg)](https://jestjs.io/)

</center>

Vue에서 alert, confirm, progress와 같이 많이 이곳 저곳에서 많이 사용하는 컴포넌트 같은 경우 사용할때마다 컴포넌트를 불러와서 출력해야하는것이 불편하여 App.vue에서 최초에 1번 불러온 show 메서드만 실행하면 화면에 출력할 수 있도록 기능구현

> ## Alert 사용 예시

```javascript
// 타이틀을 기본값으로 쓸경우.
this.$alert("메시지입니다.");

// 타이틀을 변경하고 싶은 경우
this.$alert("메시지입니다.", { title: "변경하고싶은 타이틀" });
```

![alert](https://user-images.githubusercontent.com/20200820/121209736-119c6f80-c8b6-11eb-99a7-6b3f9fff9e8f.gif)

> ## Confirm 사용 예시

```javascript
// 타이틀을 기본값으로 쓸경우.
this.$confirm("message", (result: boolean) => {
  console.log(result);
});

// 타이틀을 변경하고 싶은 경우
this.$confirm("message", { title: "변경" }, (result: boolean) => {
  console.log(result);
});
```

![confirm](https://user-images.githubusercontent.com/20200820/121361648-75836e80-c970-11eb-87a7-860415a80d0d.gif)

> ## Progress 사용 예시

```javascript
this.$showProgress();

setTimeout(() => {
  this.$hideProgress();
}, 3000);
```

![progress](https://user-images.githubusercontent.com/20200820/118649440-78ca8500-b81e-11eb-9e76-f88e17186809.gif)

> ## SnackBar 사용 예시

```javascript
this.$showSnack("테스트입니다.");
```

> ## 참고 코드

https://github.com/constkhi/vue-simple-alert
