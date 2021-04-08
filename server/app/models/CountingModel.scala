package models

object CountingModel {
  private var count = 0

  def increment(): Unit = synchronized {
      count = count + 1
  }

  def getCount(): Int = synchronized {
      count
  }
}
