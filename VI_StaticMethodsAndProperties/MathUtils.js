class MathUtils {
  static PI = 3.14159;
  static calculateCircleArea(radius) {
    return MathUtils.PI * radius * radius;
  }
}
module.exports = MathUtils;
