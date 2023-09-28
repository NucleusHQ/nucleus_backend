const webinarRegistrationEmail = (fullName, webinarName, inviteLink, meetingLink, startTime, duration) => {
    
return (`
Congratulations ${fullName}! ,

This email is to confirm that you have registered for Nucleus’ Masterclass.

Topic: ${webinarName}
Time: ${startTime}
Duration: ${duration}

Join Zoom Meeting: ${meetingLink}

Meeting ID: 821 5017 1903
Passcode: wf91Ze
    
Join our FREE Discord-server for weekly workshops, webinar recordings, notes, bonuses and updates. 

Use this invitation link: ${inviteLink}

If you have any questions or you’re facing an issue, please reply to this email or write to hi@nucleushq.io 

PS: You’re receiving this email because you’re registered for the FREE webinar and these updates are a part of your program. If you’d like to stop receiving these emails, please write to hi@nucleushq.io
`);
}

module.exports = webinarRegistrationEmail
