package controllers

import javax.inject._
import models.CountingModel
import shared.SharedMessages
import play.api.mvc._

@Singleton
class Application @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def index = Action {
    val c = CountingModel.getCount()
    Ok(views.html.index(c.toString()))
  }

  def addOne = Action {
    CountingModel.increment()
    Ok(CountingModel.getCount().toString())
  }

  def load = Action {implicit request =>
    Ok(views.html.react())
  }
}
