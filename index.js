var recipes = new Object ({})
function updateObjectWithKeyAndValue(object, key, value){return Object.assign({}, object, {[key] : value})}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){{()}bject[key]=value);  return }