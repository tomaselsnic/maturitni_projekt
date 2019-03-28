"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fields_service_1 = require("./fields.service");
const fields_Dto_1 = require("./fields.Dto");
const passport_1 = require("@nestjs/passport");
let FieldsController = class FieldsController {
    constructor(fieldsService) {
        this.fieldsService = fieldsService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fieldsService.findAll();
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fieldsService.save(data);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            return yield this.fieldsService.delete(id);
        });
    }
    detail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fieldsService.detail(id);
        });
    }
    edit(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fieldsService.edit(id, data);
        });
    }
};
__decorate([
    common_1.Get("All"),
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FieldsController.prototype, "findAll", null);
__decorate([
    common_1.Post("save"),
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fields_Dto_1.CreateFieldsDto]),
    __metadata("design:returntype", Promise)
], FieldsController.prototype, "save", null);
__decorate([
    common_1.Delete("delete/:id"),
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FieldsController.prototype, "remove", null);
__decorate([
    common_1.Get("detail/:id"),
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FieldsController.prototype, "detail", null);
__decorate([
    common_1.Post("edit/:id"),
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fields_Dto_1.CreateFieldsDto]),
    __metadata("design:returntype", Promise)
], FieldsController.prototype, "edit", null);
FieldsController = __decorate([
    common_1.Controller("fields"),
    __metadata("design:paramtypes", [fields_service_1.FieldsService])
], FieldsController);
exports.FieldsController = FieldsController;
//# sourceMappingURL=fields.controller.js.map