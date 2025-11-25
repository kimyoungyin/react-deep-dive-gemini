function Counter() {
    var counter = 0;

    return {
        increase: function () {
            return ++counter;
        },
        decrease: function () {
            return --counter;
        },
        counter: function () {
            console.log("counter에 접근");
            return counter;
        },
    };
}

var c = Counter();

console.log(c.increase()); // 1
console.log(c.increase()); // 2
console.log(c.increase()); // 3
console.log(c.decrease()); // 2
console.log(c.counter()); // 2

for (var i = 0; i < 5; i++) {
    setTimeout(
        (function (i) {
            return function () {
                console.log(i);
            };
        })(i),
        i * 1000
    );
}

// const btn = document.getElementById("a");

// function heavyJob() {
//     const longArr = Array.from({ length: 10000000 }, (_, i) => i + 1);
//     console.log(longArr.length);
// }

// btn.addEventListener("click".heavyJob);

// 클로저의 과도한 사용
const btn = document.getElementById("a");

function heavyJobWithClosure() {
    const longArr = Array.from({ length: 10000000 }, (_, i) => i + 1);
    return function () {
        console.log(longArr.length);
    };
}

const innerFunction = heavyJobWithClosure();

btn.addEventListener("click".innerFunction);
