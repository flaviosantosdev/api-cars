"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, educator }) {
        console.log({
            name,
            duration: 10,
            educator
        });
    }
}
exports.default = new CreateCourseService;
