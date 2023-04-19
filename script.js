// Define the lower and upper bounds of the random numbers
    const bounds = [
      { lower: 1, upper: 50 },
      { lower: 50, upper: 100 },
      { lower: 100, upper: 150 },
      { lower: 150, upper: 200 },
      { lower: 250, upper: 300 },
      { lower: 300, upper: 350 }
    ];

    // Define the refresh times in seconds for each random number
    const refreshTimes = [2, 4, 6, 8, 10, 12];

    // Function to generate a random number within the specified range
    function generateRandomNumber(lowerBound, upperBound) {
      return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound
    }

    // Function to display the random numbers on the webpage
    function displayRandomNumbers() {
      // Clear the previous numbers
      document.getElementById('random-numbers').innerHTML = ''

      // Generate and add each random number to the webpage with a different range and refresh time
      for (let i = 0;
        i < 6; i++) {
        const lowerBound = bounds[i].lower;
        const upperBound = bounds[i].upper;
        const refreshTime = refreshTimes[i];
        const randomNumber = generateRandomNumber(lowerBound, upperBound);
         document.getElementById(`n${i+1}`).innerHTML = randomNumber
        document.getElementById(`p${i+1}`).innerHTML = `<span class="bound">[${lowerBound}, ${upperBound}]</span> <span class="refreshTime">Refresh Rate = ${refreshTime}</span>`
        // const randomNumberElement = document.createElement('p');
        // randomNumberElement.textContent = randomNumber;
        // document.getElementById(
        //   'random-numbers').appendChild(randomNumberElement);

        // Refresh the random number at the specified interval
        setInterval(function () {
          const newRandomNumber = generateRandomNumber(lowerBound, upperBound);
          document.getElementById(`n${i+1}`).innerHTML = newRandomNumber
          // randomNumberElement.textContent = newRandomNumber;
        }, refreshTime * 1000);
      }
    }

    // Call the displayRandomNumbers function initially
    displayRandomNumbers()