const DISCORD_API_URL='https://discord.com/api/oauth2/authorize?client_id=1148644908228411475&redirect_uri=https%3A%2F%2Fdev--nucleus-project--chinmayajha.autocode.dev%2Fresponse%2F&response_type=code&scope=identify%20guilds.join%20guilds%20email%20gdm.join'


const starterPurchaseEmail = (fullName, programName, batchNo, mentor, inviteLink, startDate, endDate, isPortfolioSelected, isMockSelected) => {

const {name: mentorName, designation, company} =  mentor || {};


return (`
Congratulations ${fullName}! ,

You're enrolled in cohort ${programName} Batch ${batchNo} - LIVE - as part of Nucleus Starter.

Additional add-ons: 

${isPortfolioSelected && 'x1 - Portfolio Building - Level up your portfolio to the top 1%'}
${isMockSelected && 'x1 - Mock Interviews - Gain ultimate confidence with soft & hard skills'}

Get access to your cohort by joining our Discord Server: ${inviteLink}

Here are the details of your program you'd need:

Name of Program: ${programName}

Mentor(s): ${mentorName}, ${designation}, ${company}

Cohort: ${programName} Batch ${batchNo} - Live

Start Date: ${startDate}

End Date: ${endDate}

If you have any questions or you’re facing an issue, please reply to this email or write to hi@nucleushq.io 

PS: You’re receiving this email because you’re enrolled for cohort ${programName} and these updates are a part of your program. If you’d like to stop receiving these emails, please write to hi@nucleushq.io
`);

}

module.exports = {
    DISCORD_API_URL, 
    starterPurchaseEmail
}