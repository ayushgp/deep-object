var error = new Error("Invalid path. Please give an array object.");

var getProp = function(object, path_to_key){
	if(path_to_key.length === 1)
		return object[path_to_key[0]];
	else if(path_to_key.length === 0)
		throw error;
	else{
		if(object[path_to_key[0]])
			return getProp(object[path_to_key[0]], path_to_key.slice(1));
		else{
			object[path_to_key[0]] = {};
			return getProp(object[path_to_key[0]], path_to_key.slice(1));
		}
	}
}

var setUpdateProp = function(object, path_to_key, value){
	if(path_to_key.length === 1)
		object[path_to_key[0]] = value;
	else if(path_to_key.length === 0)
		throw error;
	else{
		if(object[path_to_key[0]])
			return setUpdateProp(object[path_to_key[0]], path_to_key.slice(1), value);
		else{
			object[path_to_key[0]] = {};
			return setUpdateProp(object[path_to_key[0]], path_to_key.slice(1), value);
		}
	}
}

var deleteProp = function(object, path_to_key){
	if(path_to_key.length === 1)
		delete object[path_to_key[0]];
	else if(path_to_key.length === 0)
		throw error;
	else{
		if(object[path_to_key[0]])
			return deleteProp(object[path_to_key[0]], path_to_key.slice(1));
		else
			return undefined;
	}
};

module.exports = {
	get: getProp,
	set: setUpdateProp,
	remove: deleteProp
};
