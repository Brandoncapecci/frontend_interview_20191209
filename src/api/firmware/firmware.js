const stubFirmware = (id) => {
	return {
		id,
		name: `v.0.${id}`
	}
}

export const getFirmwares = () => {
	let firmwareArr = [];
	for(let i = 0; i < 10; i++) {
		firmwareArr.push(stubFirmware(i));
	}
	return firmwareArr;
}