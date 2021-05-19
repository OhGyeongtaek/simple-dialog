# Simple Dialog
<center>

[![Typescript](https://img.shields.io/badge/Typescript-blue.svg)](https://www.typescriptlang.org/)
[![Vue v2.6.11](https://img.shields.io/badge/Vue-v2.6.11-blue.svg)](https://kr.vuejs.org/v2/guide/index.html)
[![Vuetify v2.4.0](https://img.shields.io/badge/Vuetify-v2.4.0-blue.svg)](https://vuetifyjs.com/en/)

</center>

Vue에서 alert, confirm, progress와 같이 많이 이곳 저곳에서 많이 사용하는 컴포넌트 같은 경우 사용할때마다 컴포넌트를 불러와서 출력해야하는것이 불편하여 App.vue에서 최초에 1번 불러온 show 메서드만 실행하면 화면에 출력할 수 있도록 기능구현

> ## Alert 사용 예시

```
this.$alert("title", "message")
```

![alert](https://user-images.githubusercontent.com/20200820/118649392-6bad9600-b81e-11eb-81c4-96b319adc489.gif)
    

> ## Confirm 사용 예시

```
this.$confirm("title", "message", (result: boolean) => {
    if (result === true) {
        console.log("Click confirm!!");
    } else {
        console.log("Click cancel!!");
    }
})
```

![confirm](https://user-images.githubusercontent.com/20200820/118649463-7cf6a280-b81e-11eb-8318-a5817924c823.gif)


> ## Progress 사용 예시

```
this.$showProgress();

setTimeout(() => {
    this.$hideProgress();
}, 3000)
```

![progress](https://user-images.githubusercontent.com/20200820/118649440-78ca8500-b81e-11eb-9e76-f88e17186809.gif)

> ## 참고 코드

https://github.com/constkhi/vue-simple-alert