const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration"
          } 
        }
      }
    ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

})

module.exports = router;