let userName = "";
const todos = [];

function getReply(command) {
	if (typeof command === "string") {
		if (command.startsWith("Hello my name is")) {
			return assignName(command);
		}

		if (command.startsWith("What is my name?")) {
			return getName();
		}

		if (command.startsWith("Add")) {
			return addToDO(command);
		}

		if (command.startsWith("Remove")) {
			return removeToDo(command);
		}

		if (command.startsWith("What is on my todo")) {
			return getTodoList();
		}

		if (command.startsWith("What day is today")) {
			return getDate();
		}

		if (command.startsWith("What is")) {
			return calculateInput(command);
		}

		if (command.startsWith("Set a timer")) {
			return setTimer(command);
		}

		if (command.startsWith("Set an alarm")) {
			return setAlarm(command);
		}

		if (command.startsWith("Convert")) {
			return convertCurrency(command);
		}
	}
}

function assignName(cmd) {
	userName = cmd.split(" ").slice(4).join(" ");
	return `Nice to meet you ${userName}`;
}

function getName() {
	if (userName) {
		return `Your name is ${userName}.`;
	} else return "Sorry, I dont know your name";
}

function addToDO(cmd) {
	const arrayFromCommand = cmd.split(" ");
	const indexOfSliceEnd = arrayFromCommand.indexOf("to");
	const todo = arrayFromCommand.slice(1, indexOfSliceEnd).join(" ");
	todos.push(todo);
	return `Task ${todo} was added to your list.`;
}

function removeToDo(cmd) {
	const arrayFromCommand = cmd.split(" ");
	const indexOfSliceEnd = arrayFromCommand.indexOf("from");
	const todoToRemove = arrayFromCommand.slice(1, indexOfSliceEnd).join(" ");

	if (todos.includes(todoToRemove)) {
		const indexOfTodoToRemove = todos.indexOf(todoToRemove);

		todos.splice(indexOfTodoToRemove, 1);
		return `Removed ${todoToRemove} from your todo`;
	} else {
		return "Cannot find this task";
	}
}

function getTodoList() {
	if (todos.length > 0) {
		return `You have ${todos.length} todos: ${todos.join(" and ")}`;
	}
}

function getDate() {
	const currentDate = new Date();
	const day = currentDate.getDate();
	const month = new Intl.DateTimeFormat("en-UK", { month: "long" }).format(
		currentDate
	);

	const year = currentDate.getFullYear();
	return `${day}. of ${month} ${year}`;
}

function calculateInput(input) {
	const arrayFromCommand = input.split(" ");

	const firstArgument = Number(arrayFromCommand[2]);
	const secondArgument = Number(arrayFromCommand[arrayFromCommand.length - 1]);

	const operator = arrayFromCommand[3];

	switch (operator) {
		case "+":
			return firstArgument + secondArgument;

		case "-":
			return firstArgument - secondArgument;

		case "*":
			return firstArgument * secondArgument;

		case "/":
			return firstArgument / secondArgument;

		default:
			return "Uknown value";
	}
}

function setTimer(cmd) {
	const arrayFromCommand = cmd.split(" ");
	const timerValue = Number(arrayFromCommand[arrayFromCommand.length - 2]);

	setTimeout(function () {
		console.log("Timer done");
	}, timerValue * 60000);
	return `Timer set for ${timerValue} minutes`;
}

function setAlarm(command) {
	const time = command.split(" ").slice(-2).join(" ");
	return `Your mom will wake you up at ${time} 🤣🙌`;
}

function convertCurrency(cmd) {
	const arrayFromCommand = cmd.split(" ");
	const inputAmmount = Number(arrayFromCommand[1]);
	let outputAmmount = 0;
	const inputCurrency = arrayFromCommand[2];
	const outputCurrency = arrayFromCommand[arrayFromCommand.length - 1];

	if (inputCurrency === "EUR" && outputCurrency === "DKK") {
		outputAmmount = inputAmmount * 7.4577;
	}

	if (inputCurrency === "DKK" && outputCurrency === "EUR") {
		outputAmmount = inputAmmount / 7.4577;
	}

	if (inputCurrency === "USD" && outputCurrency === "DKK") {
		outputAmmount = inputAmmount * 7.108;
	}

	if (inputCurrency === "DKK" && outputCurrency === "USD") {
		outputAmmount = inputAmmount / 7.108;
	}

	if (inputCurrency === "GBP" && outputCurrency === "DKK") {
		outputAmmount = inputAmmount * 9.0036;
	}

	if (inputCurrency === "DKK" && outputCurrency === "GBP") {
		outputAmmount = inputAmmount / 9.0036;
	}

	return `${inputAmmount} ${inputCurrency} equils to ${outputAmmount.toFixed(
		2
	)} ${outputCurrency}`;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add doing nothing to my todo"));
console.log(getReply("Remove doing nothing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is today?"));
console.log(getReply("What is 48 / 4"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Set an alarm for 7:30 AM"));
console.log(getReply("Convert 7 EUR to DKK"));
console.log(getReply("Convert 75 DKK to EUR"));
console.log(getReply("Convert 80 USD to DKK"));
console.log(getReply("Convert 100 DKK to USD"));
console.log(getReply("Convert 75 GBP to DKK"));
console.log(getReply("Convert 1000 DKK to GBP"));
console.log(todos);
