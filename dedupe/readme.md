### 去除数组中重复的项

#### 简单用法
```javascrit
    var dedupe = require('dedupe');
    var a = [1, 2, 2, 2, 5];
    var b = dedupe(a);
    cosole.log(b); // [1, 5]
```

#### 复杂类型
```javascrit
    var dedupe = require('dedupe');
    var aa = [{a: 2}, {a: 2}, {b: 1}, {b: 1}, {c: 1}];
    var bb = dedupe(aa);
    cosole.log(bb); // [{a: 2}, {b: 1}, {c: 1}]
```

#### 传入比较方式
```javascrit
    var dedupe = require('dedupe');
    var aa = [{a: 2}, {a: 2}, {a: 2, b: 1}, {a: 1, b: 1}, {a: 1, c: 1}];
    var bb = dedupe(aa, value => value.a);
    cosole.log(bb); // [{a: 2}, {a: 1, b: 1}]
```
注：使用了简单的方式比较，后面相同的会去掉