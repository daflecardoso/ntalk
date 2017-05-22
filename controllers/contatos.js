module.exports = function(app) {
	var ContatosController = {
		index: function(req, res) {
			var usuario = req.session.usuario
			, params = {usuario: usuario};
			res.render('contatos/index.ejs',params);
		},
		create: function(req, res) {
			var contato = req.body.contato
			, usuario = req.session.usuario;
			usuario.contatos.push(contato);
			res.redirect('/contatos');
		},
		show: function(req, res) {
			var id = req.params.id
			, usuario = req.session.usuario
			, contato = usuario.contatos[id]
			, params = {contato: contato, id: id};
			res.render('contatos/show.ejs',params);
		},
		edit: function(req,	res) {
			var	id = req.params.id
			, usuario =	req.session.usuario
			, contato =	usuario.contatos[id]
			, params = {usuario: usuario, contato: contato, id: id};
			res.render('contatos/edit.ejs',	params);
		},
		update:	function(req,	res) {
			var	contato	= req.body.contato
			, usuario =	req.session.usuario;
			usuario.contatos[req.params.id]	=	contato;
			res.redirect('/contatos');
		},
		destroy: function(req,	res) {
			var	usuario	= req.session.usuario
			, id = req.params.id;
			usuario.contatos.splice(id,	1);
			res.redirect('/contatos');
		}
	};
	return ContatosController;
}