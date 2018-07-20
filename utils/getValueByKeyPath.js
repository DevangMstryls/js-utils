export default function getValueByKeyPath(obj, keys) {
	
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		obj = obj[key];
	}
	
	return obj;
}