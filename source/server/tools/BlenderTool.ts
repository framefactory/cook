/**
 * 3D Foundation Project
 * Copyright 2019 Smithsonian Institution
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tool, { IToolSettings, IToolSetup, ToolInstance } from "../app/Tool";

////////////////////////////////////////////////////////////////////////////////

export interface IBlenderToolSettings extends IToolSettings
{

}

export type BlenderInstance = ToolInstance<BlenderTool, IBlenderToolSettings>;

export default class BlenderTool extends Tool<BlenderTool, IBlenderToolSettings>
{
    static readonly toolName = "Blender";

    protected static readonly defaultSettings: Partial<IBlenderToolSettings> = { };

    async setupInstance(instance: BlenderInstance): Promise<IToolSetup>
    {
        return Promise.reject("not implemented yet");
    }
}