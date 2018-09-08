# JS Nâng cao: ES6
## I. ES6 là gì?
ES6 là chữ viết tắt của ECMAScript 6, đây được coi là một tập hợp các kỹ thuật nâng cao của Javascript và nó là 1 chuẩn mực để làm theo. ES6 là phiên bản mới nhất của chuẩn ECMAScript.

## II. Các tính năng cả ES6
### 1.	Template Literals
Template Literals là một cú pháp mới để khai báo String
- Thay vì khai báo bằng dấu `'` hoặc `"` thì bạn đổi bằng dấu `:
- Khai báo cộng chuỗi bằng dấu `+` sẽ được thay thế bằng `${} `
```sh
var variableName = `content ${content}`;
```

### 2.	Destructuring Assignment
Destructuring Assignment Là cách tách các phần tử của array hay object thành nhiều biến.
-	Sử dụng mảng
```sh
let date = [10, 03, 2016]
// Chuyển ba giá trị vào ba biến d, m, y
let [d, m, y] = date;
// In kết quả
console.log("Day: " + d);   // Day: 10
console.log("Month: " + m); // Month: 03
console.log("Year: " + y);  // Year : 2016
```

-	Sử dụng object:
```sh
let date = {
    day : 10,
    month : 06,
    year : 2016
}
// Chuyển ba giá trị vào ba biến
let {day : d, month : m, year : y} = date;
 
// In kết quả
console.log("Day: " + d);
console.log("Month: " + m);
console.log("Year: " + y);

```

### 3.	Object Literals
Object literal là kiểu cú pháp tạo object sử dụng cặp dấu ngoặc {} và bên trong đó là danh sách các **property** (thuộc tính) của object.
- Kiểu cũ: 
```sh
var name = "John"; 
var myObj = { 
    name: name, 
   sayHi: function () { 
      console.log("Hi, my nam is " + this.name) } 
}; 
myObj.sayHi()
```
- ES6: 
```sh
let name = "John"; 
let myObj = { 
    name, 
    sayHi() { 
       console.log("Hi, my nam is " + this.name) } 
}; 
myObj.sayHi()
```

### 4.	For of loop
- Kiểu cũ:
```sh
let arr = [1, 2, 3, 4, 5, 6],    
    length = arr.length,    
    i;
for (i = 0; i < length; i++) { 
    console.log(arr[i])
}
// output: 1 2 3 4 5 6
```
- ES6: 
```sh
let arr = [1, 2, 3, 4, 5, 6] 
for (let value of arr) {
    console.log(value)
}
// output: 1 2 3 4 5 6
```

### 5.	Spread operator
Spread operator được sử dụng trong các câu lệnh, biểu thức hoặc khi gọi hàm. Spread Operator cho phép chuyển đổi một chuỗi thành nhiều argument (trong trường hợp gọi với hàm) hoặc thành nhiều phần tử (cho array).
-	Sử Dụng Spread Operator Với Hàm
`sayMyName(...fullName)`
_Ở đây spread sẽ tự động biến array fullName và tách chúng ra thành 2 arguments_

-	Sử Dụng Spread Operator Với Array
Kiểu cũ:
```sh
var album1 = ["Tình thôi xót xa", "Sài Gòn lụt"]
var album2 = ["Sót xa"]
//gộp mảng
var album2 = album2.concat(album1)
```
ES6:
```sh
var album1 = ["Tình thôi xót xa", "Sài Gòn lụt"]
var album2 = ["Sót xa", ...album1]
```

### 6.	Rest operator
Rest operator khai báo một hàm với số lượng tham số không xác định
```sh
let domainList = (main, sub, ...other) =>
{
// trong đó tham số other là một Rest Parameter
    console.log("Main: " + main);
    console.log("Sub: " + sub);
    console.log("Other");
console.log(other);
}
// Gọi hàm
domainList('freetuts.net', 'facebook.com', 'google.com', 'zalo.com', 'iphone.com');
```
**Kết quả**
Main: freetuts.net
Sub: facebook.com
Other
[google.com, zalo.com, iphone.com]

### 7.	Arrow function
Là cách định nghĩa ` function` bằng dấu mũi tên ` =>`
- Kiều cũ
```sh
//nhiều tham số
var multiply = function(x, y) {
    return x * y;
}; 
//1 tham số
var phraseSplitterEs5 = function phraseSplitter(phrase) { 
    return phrase.split(' '); 
}; 
//không có tham số
var docLogEs5 = function docLog() { 
    console.log(document); 
};
```

- ES6
```sh
//nhiều tham số
var multiply = (x, y) => { return x * y };
//1 tham số
var phraseSplitterEs6 = phrase => phrase.split(" "); 
//không có tham số
var docLogEs6 = () => { console.log(document); } 

```

### 8.	let và const
Bình thương ta sử dụng `var` để khai báo 1 biến, biến này có phạm vi truy cập trong cả function.
Để tránh lãng phí bộ nhớ của máy thì ta sử dụng `let` để khai báo 1 biến chỉ truy cập trong 1 block bao quanh nó.
`Const`: khai báo 1 hằng số - là giá trị không thay đổi được trong quá trình chạy.

### 9.	import và export
import và export hỗ trợ lập trình viên có thể quản lý code theo từng mô-đun.
- Câu lệnh export dùng để xuất ra một mô-đun:
```sh
let sayHello = function (name) { 
console.log("Xin chào! Tên tôi là " + name);
} 
export { sayHello };
```
- Câu lệnh import trong ES6 dùng để nhập vào mô-đun từ một file cho trước:
```sh
import { sayHello } from 'say_hello.js';
```

### 10.	 Classes
Trong ES6 đã hỗ trợ chúng ta khai báo một đối tượng theo chuẩn OOP, bằng cách sử dụng từ khóa class. ES6, nó cũng đã cung cấp cho chúng ta sử dụng từ khóa extends để kế thừa từ đối tượng khác.
```sh
class Employee {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    setName (name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }
    setAge (age) {
        this.age = age;
    }
    getAge () {
        return this.age;
    }
};
```

### 11. Async / Await
Async / Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ 
- Async - khai báo một hàm bất đồng bộ (async function someName(){...}).
- Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ()
```sh
async function getJSONAsync()
	let json = await fetch('https://tutorialzine.com/misc/files/example.json');
   	return json;
}
```
#Vuejs
## I. Giới thiệu
Vue.js là một framework linh động  dùng để xây dựng giao diện người dùng (user interfaces).
Vue.js cho phép ràng buộc một cách minh bạch cấu trúc DOM. Tất cả các template của Vue đều là code HTML hợp lệ
![Img1](https://github.com/TruongKhanhLinh/Baitap-JavaScript/blob/master/ES6-Vuejs/images/img1.png)

## II. Methods
methods là danh sách các phương thức của component, ở trong đây các bạn sẽ viết các phương thức mà từ đó các bạn có thể thực thi ở một nơi nào đó trong component
![Img2](https://github.com/TruongKhanhLinh/Baitap-JavaScript/blob/master/ES6-Vuejs/images/img2.png)

## III. Component
Component gom nhóm các mã HTML lại để tái sử dụng cho các module tương tự. Ở một mức độ cao thì component là một thành phần được Vue.js biên dịch để xử lý các hành vi. Và trong một vài trường hợp thì nó cũng có thể xuất hiện như một phần tử HTML với các attribute đặc biệt.
Trong Vue.js để khai báo một component sử dụng cú pháp:
```sh
Vue.component('tag', options);
```
Trong đó: 
- tag là tên mà bạn muốn gán cho component đó.
- options là một object chứa các tham số là template hay dữ liệu kèm theo.
VD: 
```sh
<div id="app">
        <onent></onent>
    </div>
    <script src="https://unpkg.com/vue@2.4.2" type="text/javascript"></script>
    <script type="text/javascript">
        //đăng ký component
        Vue.component('onent',{
            template: '<h1>Say hello </h1>'
        });
        var app = new Vue({
            el: '#app',
        });
    </script>
```

**Passing Data with Props**
Trong Vue.js thì tất cả các component đều có isolated scope ( phạm vi cô lập ) riêng. Điều này có nghĩa là bạn không thể (và cũng không nên) tham chiếu trực tiếp các dữ liệu ở component cha ( parent ) vào trong component con (child). Mà thay vào đó chúng ta sẽ phải truyền chúng qua props.
Props ở đây là một attribute tùy chỉnh dùng để truyền data từ component parent đến các component child, và để có thể nhận được dữ liệu từ component parent thì component child phải khai báo prop mà nó mong muốn nhận được từ component parent, bằng cách đặt tên prop ở trong props scope.

VD:
```sh
<div id="app">
        <child message="Toidicode.com"></child>
    </div>
    <script src="https://unpkg.com/vue@2.4.2" type="text/javascript"></script>
    <script type="text/javascript">
        Vue.component('child', {
            props: ['message'],
            template: '<h1>{{ message }}</h1>',
            
        });
        var app = new Vue({
            el: '#app',
        });
    </script>
```