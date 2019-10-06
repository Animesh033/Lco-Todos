let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeetings: function(num){
        // console.log('Heyy i am a function!')
        // console.log(this)
        this.meetings = this.meetings + num
    },
    summary: function(){
        return `You have ${this.meetings} meetings!`
    }
}

myTodos.addMeetings(6)
console.log(myTodos.summary())