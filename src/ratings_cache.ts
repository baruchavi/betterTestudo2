interface Request {
    type: string,
    request: string
}

// Listen for messages from client
chrome.runtime.onMessage.addListener(
    function(request:Request, sender, sendResponse) {

        switch (request.type) {

            case ("prof") : cacheProf(request.request).then(response => {
                if (response == "error") {
                    sendResponse({error: true, data: ''})
                } else {
                    sendResponse({error: false, data:response})
                }
            })

            case ("grades") : cacheGrades(request.request).then(response => {
                if (response == "error") {
                    sendResponse({error: true, data: ''})
                } else {
                    sendResponse({error: false, data:response})
                }
            })

        }

    }
)

async function cacheProf(name: string) : Promise<string> {
    return "error";
}

async function cacheGrades(courseCode: string) : Promise<string> {
    return "error"
}