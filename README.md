# spingarn
⏳ Advanced stopwatch with functionalities to store records of times spent on something, store on localstorage based on ctegories and keep track of progress.
<br/>

## Functionalities
- Create new record eg record for time spent jogging a distance
- Add time to record by clicking play button
- Pause time by clicking pause
- Continue the time by clicking play (Regular stopwatch functions)
- Click stop to clear time and update time in local storage.
- More...
<br/>

## JSON Data Structure

```JSON

{category: "new-861", iterations: ["00:06:10", "00:03:06"],…}
category
: 
"new-861"
date
: 
"Tue Oct 11 2022 10:13:06 GMT+0100 (West Africa Standard Time)"
iterations
: 
["00:06:10", "00:03:06"]
```
<br/>

## Challenges
- Updating time: since localStorage has only .setItem() and .getItem() methods I had to create an update function that updates iteration(an Array inside an object that's inside an Array without overiding the data)

<br/>

Created by 🖋️Samahd &copy; 2022