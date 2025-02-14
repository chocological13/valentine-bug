export const gameMessages = {
    welcome: [
        "Found a bug in my code. Help debug? 🐞",
        "Critical error in feelings.js needs fixing 😵",
        "git commit -m 'Something special' 👀",
        "System needs your expertise 🥺"
    ],

    codePuzzle: `const feelings = {
  status: "loading...",
  cache: "your smile",
  priority: 1,
  type: "special"
  createdAt: new Date(firstMet),
};`,
    debugging: {
        title: [
            "Bug detected in heart.js",
            "Critical error in emotions.exe",
            "System.Feelings needs debugging",
            "Unexpected butterflies in stomach.js"
        ],
        description: [
            "My heart's running into some bugs... Can you help catch them? 🐛",
            "Something's making my heart skip a beat... Debug time? 🐛",
            "Feelings.exe encountered some bugs... Help me fix them? 🐛",
            "Error: Heart overflow. Need your debugging skills! 🐛"
        ],
        buttonText: [
            "Start Debugging ❤️",
            "Debug My Heart 🩹",
            "Fix These Feelings 💝",
            "Run heart.debug() 💕"
        ]
    },

    success: {
        title: [
            "You fixed my heart! ❤️",
            "Debug successful! 💝",
            "Heart.js optimized! 💖",
            "Connection restored! 💕"
        ],
        description: [
            "Now I can properly express my feelings...",
            "All systems are ready for a special request...",
            "Time to execute the most important function...",
            "Package 'love' is ready to deploy..."
        ],
        question: [
            "Will you be my Valentine? 💝",
            "mergeBranch('you', 'me')? 💖",
            "git commit -m 'Be mine'? 💕",
            "npm install @my/valentine? 🩷"
        ],
        buttonText: [
            "Yes! ❤️",
            "Accept merge ✨",
            "Commit & push 💫",
            "Deploy to prod 🌟"
        ]
    },

    final: {
        title: [
            "Code Compilation Successful! 🎉",
            "Debug Process Complete! 💝",
            "All Tests Passed! 🌟",
            "Connection Established! ✨"
        ],
        description: [
            "Our love has no bugs, only features! 🩷",
            "Perfect match found in production! 💕",
            "Successfully deployed to heart! 💖",
            "Love.js is running perfectly! 💗"
        ],
        consoleOutput: [
            [
                "Status: Compilation successful",
                "Return value: Infinite love",
                "Debug result: Perfect match found!"
            ],
            [
                "npm install @your/heart --save",
                "Adding to dependencies...",
                "Package 'love' installed successfully!"
            ],
            [
                "git commit -m 'Found the one'",
                "git push origin main",
                "Deployment to heart successful!"
            ],
            [
                "Running final tests...",
                "All 100 love tests passed",
                "Ready for production! ❤️"
            ]
        ],
        buttonText: [
            "Debug Again? 💝",
            "Run Another Test? 💖",
            "Start New Session? 💕",
            "Recompile? 🩷"
        ]
    },

    debugPrompts: [
        "Bug report: Heart racing unexpectedly",
        "Runtime error: Can't stop thinking",
        "Unexpected behavior in emotions.js",
        "Warning: Happiness overflow detected"
    ],

    catchingPrompts: [
        "Debug in progress...",
        "Fixing dependencies...",
        "Optimizing connection...",
        "Running heart.js..."
    ],

    finalQuestion: [
        "Code review needed: Be my Valentine?",
        "Pull request: Valentine's date?",
        "New notification: Be mine?",
        "Merge request: You + Me?"
    ],

    // For the code display
    loveCode: `function valentine() {
  const you = special.person;
  const me = heart.owner;
  
  if (you.accept) {
    return happiness.max();
  }
}`,

    // For the success stage
    completionMessage: [
        "Deployment successful",
        "All systems operational",
        "Connection secure",
        "Perfect sync achieved"
    ]
};

// You can also have some fun error messages
export const errorMessages = [
    "Error 404: Resistance futile",
    "Warning: Charm overflow",
    "Exception: Too awesome to handle",
    "Status: Happily debugged"
];