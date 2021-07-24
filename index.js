// function Monday(){
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function Tuesday(){
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function Wednesday(){
//     console.log("Go for a five-mile run")
//     console.log("Go for a five-mile run")    
// }

// function Thursday(){
//     console.log("Go for five-mile run")
//     console.log("Pump iron")
// }

// function Friday(){
//     console.log("Go for five-mile run")
//     console.log("Swim 40 laps")
// }

// function liftWeights(){
//     console.log("Pump iron")
// }

// function fiveMileRun(){
//     console.log("Go for a five-mile run")
// }

// function swimFortyLaps(){
//     console.log("Swim 40 laps")
// }

// function exerciseRoutine(postRun){
//     fiveMileRun()
//     postRun()
// }

// function Monday(){
//     exerciseRoutine(liftWeights)
// }

// function morningRoutine(exercise){
//     let breakfast

//     if (exercise === liftWeights){
//         breakfast = "protein"
//     } else if (exercise === swimFortyLaps){
//         breakfast = "smoothie"
//     } else {
//         breakfast = "oats"
//     }

//     exerciseRoutine(exercise);

//     return function(){
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     }
// }

// const afterExercise = morningRoutine(liftWeights);

// afterExercise();

function receivesAFunction(cb){
    cb()
}

function returnsANamedFunction(){

    return function helloWorld(){
        console.log("Hello World")
    }
}

function returnsAnAnonymousFunction(){

    return () => console.log("anonymous")
}








