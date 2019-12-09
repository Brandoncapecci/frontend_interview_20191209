const stubDevice = (id) => {
	return {
		id,
		name: 'Test Device',
		initiatedUpdate: new Date(),
		completedUpdate: new Date(),
		status: 'idle',
		currentFirmware: 'v0.1',
		targetFirmware: 'v0.2',
		errorMessage: null
	}
}

// ids - Array<DeviceId>
export const getDevices = (ids) => {
	let deviceArr = [];
	for(let i = 0; i < 10; i++) {
		deviceArr.push(stubDevice(i));
	}
	return deviceArr;
}