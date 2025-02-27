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

const dog = new Dog();
dog.speak(); // ✅ "Bark! Bark!"
