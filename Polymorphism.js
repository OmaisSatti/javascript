// 4️⃣ Polymorphism (✅ Fully Supported)
// Polymorphism means the same method behaves differently in different classes.
// ✅ JavaScript supports method overriding but not method overloading.

class Animal {
    speak() {
        console.log("Animal is making a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark! Bark!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow! Meow!");
    }
}

let animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(a => a.speak());
// ✅ Bark! Bark!
// ✅ Meow! Meow!
// ✅ Animal is making a sound

function makeThemSpeak(animal) {
    animal.speak();
}

/* 3. Polymorphism with Same Interface
Maan lo tumhare paas ek function hai jo sab animals ko makeThemSpeak() karata hai:
👉 Tumhe pata hi nahi hona chahiye ki object Dog hai ya Cat, tum bas speak() 
call karoge – aur different result milega. Ye hi real polymorphism hai. */
makeThemSpeak(new Dog()); // ✅ Bark! Bark!
makeThemSpeak(new Cat()); // ✅ Meow! Meow!
