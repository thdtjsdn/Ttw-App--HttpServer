
// config
SERVER.PATH_ROOT = '.web/';

ConfigServerHttp.ABSOLUTE_PATH_APPLICATION_WEB = '.web/';

//----------------------------------------------------------------------------------------------------;

SERVER.addRouter('/', function(req, res, owner){
	UtilHttpResponse.response_200_FileStream(req, res, ConfigServerHttp.ABSOLUTE_PATH_APPLICATION_WEB + 'index.html', 'html', owner);
});
