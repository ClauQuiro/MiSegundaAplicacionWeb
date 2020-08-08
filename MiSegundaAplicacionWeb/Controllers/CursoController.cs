using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiSegundaAplicacionWeb.Controllers
{
    public class CursoController : Controller
    {
        // GET: Curso
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult listarcurso()
        {
            PruebaDataContext bd = new PruebaDataContext();
            var lista = bd.Curso.Where(p => p.BHABILITADO.Equals(1))
                .Select(p => new { p.IIDCURSO, p.NOMBRE, p.DESCRIPCION });
            return Json(lista,JsonRequestBehavior.AllowGet);
        }
        public JsonResult BuscarCursoPorNombre(string nombre)
            {

            PruebaDataContext bd = new PruebaDataContext();
            var lista = bd.Curso.Where(p => p.BHABILITADO.Equals(1)&& p.NOMBRE.Contains(nombre))
                .Select(p => new { p.IIDCURSO, p.NOMBRE, p.DESCRIPCION });
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
    }
}