using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiSegundaAplicacionWeb.Controllers
{
    public class PeriodoController : Controller
    {
        // GET: Periodo
        public ActionResult Index()
        {
            return View();
        }
        public string mensaje()
        {
            return "HOy es un lindo dia muchas gracias Universo";
        }
        public JsonResult listarperiodo()
        {
            PruebaDataContext bd = new PruebaDataContext();
            var lista = (bd.Periodo.Where(p => p.BHABILITADO.Equals(1))
            .Select(p => new {p.IIDPERIODO, p.NOMBRE,FECHAINICIO=((DateTime) p.FECHAINICIO).ToShortDateString(),FECHAFIN =((DateTime)p.FECHAFIN).ToShortDateString() }));
            return Json(lista, JsonRequestBehavior.AllowGet);

        }
        public JsonResult BuscarPeriodoPorNombre(string nombre)
        {
            PruebaDataContext bd = new PruebaDataContext();
            var lista = (bd.Periodo.Where(p => p.BHABILITADO.Equals(1)&& p.NOMBRE.Contains(nombre))
            .Select(p => new { p.IIDPERIODO, p.NOMBRE, FECHAINICIO = ((DateTime)p.FECHAINICIO).ToShortDateString(), FECHAFIN = ((DateTime)p.FECHAFIN).ToShortDateString() }));
            return Json(lista, JsonRequestBehavior.AllowGet);

        }
    }
}